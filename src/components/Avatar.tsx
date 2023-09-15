interface Props {
  avatar: string;
}

function Avatar({ avatar }: Props) {
  return (
    <div className='relative'>
      <img className='w-full' src={avatar} alt='Avatar' />
    </div>
  );
}

export default Avatar;
