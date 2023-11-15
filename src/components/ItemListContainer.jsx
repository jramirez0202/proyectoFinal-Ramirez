import PropTypes from 'prop-types';

export default function ItemListContainer({sayHello}) {
  return (
      <h1 className="flex items-center justify-center h-screen">{sayHello}</h1>
  )
}


ItemListContainer.propTypes = {
  sayHello: PropTypes.string.isRequired,
};