import DeletePostButton from './DeletePostButton';

type PostProps = {
  id: string;
  title: string;
  content: string | null;
  authorName: string | null;
};

export default function Post({ id, title, content, authorName }: PostProps) {
  return (
    <div className='flex flex-col border-2 border-gray-800 rounded-md p-4 my-4'>
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      <DeletePostButton postId={id} />
    </div>
  );
}
