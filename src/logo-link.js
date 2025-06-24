export function LogoLink({ href, className, alt, imgSrc }) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  const img = document.createElement("img");
  img.src = imgSrc;
  img.className = className;
  img.alt = alt;
  link.appendChild(img);
  return link;
}
