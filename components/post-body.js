import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content, date, image, imageAlt, type }) {
  return (
    <div className="max-w-2xl mx-auto">
      {date && (
        <div className="text-black italic text-sm">Published {date}</div>
      )}
      {image && !(type && type === "tutorial") && (
        <img src={image} alt={imageAlt} height="200px" className="w-auto" />
      )}
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
