import NextLink, { LinkProps } from "next/link";

export default function StyledLink(props: LinkProps) {
  return (
    <NextLink
      className="font-semibold text-brand-700 hover:text-brand-800 hover:decoration-brand-800 underline underline-offset-2 hover:decoration-2"
      {...props}
    />
  )
}
