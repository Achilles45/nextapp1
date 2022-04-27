import articleStyles from "../styles/Article.module.css"
import Link from "next/link"

const Article = ({ article }) => {
  return (
    <Link href="/article/[id]" as={ `/article/${article.id}` }>
        <a className={ articleStyles.card }>
        <h4>{ article.title }</h4>
        <hr />
        <p>{ article.body }</p>
        </a>
    </Link>
  )
}

export default Article