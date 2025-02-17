function FilterButtons({ setFilter, filter }) {
  return (
    <div className='flex justify-around items-center'>

      <button onClick={() => setFilter('All')} className={`${filter == 'All' ? 'bg-teal-600 text-white' : 'bg-teal-100'} font-serif p-2 font-medium px-4 rounded-sm`}>All</button>

      <button onClick={() => setFilter('Completed')} className={`${filter == 'Completed' ? 'bg-teal-600 text-white' : 'bg-teal-100'} font-serif font-medium p-2  px-4 rounded-sm`}>Completed</button>

      <button onClick={() => setFilter('UnCompleted')} className={`${filter == 'UnCompleted' ? 'bg-teal-600 text-white' : 'bg-teal-100'} font-serif font-medium p-2  px-4 rounded-sm`}>UnCompleted</button>
    </div>
  )
}

export default FilterButtons