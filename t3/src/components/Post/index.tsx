interface PostProps {
  title: string;
  content: string;
}
export function Post(props: PostProps){
  return (
      <div>
        <strong>{props.title}</strong>
        <p>{props.content}</p>
      </div>
  )
}