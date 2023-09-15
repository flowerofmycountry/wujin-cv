import { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';

interface Props {
  title: string;
  data: JSX.Element[];
}

function CommonCard({ title, data, children }: PropsWithChildren<Props>) {
  const dataList = data.map((item, index) => <div key={index}>{item}</div>);

  return (
    <div className='px-4 pb-4'>
      <h2 className='flex py-4 my-2 text-gray-500 text-xl'>
        {children}
        {title}
      </h2>
      <div className='markdown-body'>{dataList}</div>
    </div>
  );
}

CommonCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CommonCard;
