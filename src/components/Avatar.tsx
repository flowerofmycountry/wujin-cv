interface Props {
  name: string;
  avatar: string;
}

function Avatar({ name, avatar }: Props) {
  return (
    <div className='relative'>
      <img className='w-full' src={avatar} alt='Avatar' />
      <div className='absolute left-0 bottom-0 py-1 px-4'>
        <h2 className='text-lg font-bold'>{name}</h2>
      </div>
    </div>
  );
}

export default Avatar;
