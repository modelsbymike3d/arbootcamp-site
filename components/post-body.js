import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content, date, image, imageAlt }) {
  return (
    <div className="max-w-2xl mx-auto">
      {date && (
        <div className="text-black italic text-sm">Published {date}</div>
      )}
      {image && <img src={image} alt={imageAlt} />}
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
