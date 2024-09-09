function findAndReplaceReferencesWithLinks() {
  var doc = DocumentApp.getActiveDocument()
  var body = doc.getBody()
  Logger.log('Starting script execution')

  // Find the bibliography section
  var bibliographyElement = body.findText('^Bibliographie$')
  if (!bibliographyElement) {
    Logger.log('Bibliography not found. Exiting script.')
    return
  }

  var bibliographyIndex = bibliographyElement.getStartOffset()
  var bibliographyParagraph = bibliographyElement.getElement().getParent()

  var referenceMap = {}
  var bibliographyItemPattern = '\\[\\d+\\]'
  var bibliographySearchResult = body.findText(
    bibliographyItemPattern,
    bibliographyElement,
  )

  while (bibliographySearchResult) {
    var element = bibliographySearchResult.getElement()
    var startOffset = bibliographySearchResult.getStartOffset()
    var endOffset = bibliographySearchResult.getEndOffsetInclusive()
    var fullRef = element
      .asText()
      .getText()
      .substring(startOffset, endOffset + 1)
    var refNumber = fullRef.match(/\d+/)[0]

    // Create a bookmark for this bibliography item
    var position = doc.newPosition(element, startOffset)
    var bookmark = doc.addBookmark(position)
    var bookmarkId = bookmark.getId()

    referenceMap[refNumber] = bookmarkId

    bibliographySearchResult = body.findText(
      bibliographyItemPattern,
      bibliographySearchResult,
    )
  }

  // Regular expression pattern to find all citations
  var referencePattern = '\\[\\d+.*?\\]'

  // Find and process all matches in the document for citations
  var searchResult = body.findText(referencePattern)
  var linkCount = 0

  while (searchResult) {
    var element = searchResult.getElement()

    // Check if we've reached the bibliography section
    if (
      element.getParent().getParent().getChildIndex(element.getParent()) >=
      body.getChildIndex(bibliographyParagraph)
    ) {
      Logger.log('Reached bibliography section. Stopping reference linking.')
      break
    }

    var startOffset = searchResult.getStartOffset()
    var endOffset = searchResult.getEndOffsetInclusive()
    var fullRef = element
      .asText()
      .getText()
      .substring(startOffset, endOffset + 1)
    var refNumber = fullRef.match(/\d+/)[0]

    if (referenceMap[refNumber]) {
      var bookmarkId = referenceMap[refNumber]

      // Create an internal link
      element
        .asText()
        .setLinkUrl(startOffset, endOffset, '#bookmark=' + bookmarkId)
      linkCount++

      // Apply the style: font color to #bf5902 and remove underline
      element.asText().setForegroundColor(startOffset, endOffset, '#bf5902')
      element.asText().setUnderline(startOffset, endOffset, false)

      // Log the reference and its context
      var elementText = element.asText().getText()
      var contextStart = Math.max(0, startOffset - 20)
      var contextEnd = Math.min(elementText.length, endOffset + 20)
      var context = elementText.substring(contextStart, contextEnd)
      Logger.log(
        'Reference [' + refNumber + '] linked. Context: ...' + context + '...',
      )
    } else {
      Logger.log(
        'Bibliography entry not found for reference [' + refNumber + ']',
      )
    }

    searchResult = body.findText(referencePattern, searchResult)
  }

  if (linkCount === 0) {
    Logger.log('No references linked. Exiting script.')
    return
  }

  Logger.log('Script execution completed. Created ' + linkCount + ' links.')
}

function removePaperpileLinks() {
  var doc = DocumentApp.getActiveDocument()
  var body = doc.getBody()
  var removed = 0

  // Function to process an element and its child elements
  function processElement(element) {
    if (element.getType() === DocumentApp.ElementType.TEXT) {
      var text = element.editAsText()
      var textLength = text.getText().length

      for (var i = 0; i < textLength; i++) {
        var url = text.getLinkUrl(i)
        if (
          url &&
          (url.startsWith('https://paperpile.com') ||
            url.startsWith('http://paperpile.com'))
        ) {
          // Find the end of the link
          var j = i
          while (j < textLength && text.getLinkUrl(j) === url) {
            j++
          }
          text.setLinkUrl(i, j - 1, null)
          removed++
          i = j - 1 // Skip to end of removed link
        }
      }
    } else if (element.getNumChildren) {
      // Recursively process child elements
      var numChildren = element.getNumChildren()
      for (var i = 0; i < numChildren; i++) {
        processElement(element.getChild(i))
      }
    }
  }

  // Start processing from the body
  processElement(body)
}

function onOpen() {
  var ui = DocumentApp.getUi()
  ui.createMenu('References')
    .addItem('Create Reference Links', 'findAndReplaceReferencesWithLinks')
    .addToUi()
}
