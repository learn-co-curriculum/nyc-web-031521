function Filter({
  isShowingOnlyGreased,
  onUpdateGreasedFilter,
  sortBy,
  onUpdateSort,
}) {
  return (
    <div>
      <label>
        Show Only Greased?
        <input
          type="checkbox"
          checked={isShowingOnlyGreased}
          onChange={() => onUpdateGreasedFilter()}
        />
      </label>
      <select value={sortBy} onChange={(e) => onUpdateSort(e.target.value)}>
        <option value="name">Sort by name</option>
        <option value="weight">Sort by weight</option>
      </select>
    </div>
  );
}

export default Filter;
