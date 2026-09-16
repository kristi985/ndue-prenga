export default function AnimatedHeading({ text, className = "", as: Tag = "h2" }) {
  return <Tag className={className}>{text}</Tag>;
}
