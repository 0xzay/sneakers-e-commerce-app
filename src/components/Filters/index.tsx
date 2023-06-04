import { setColorFilter } from '../../redux/filters/slice';

const ColorFilter = ['White', 'Black', 'Gray', 'Blue', 'Green'];

type FiltersProps = {
  brandFilterList: string[];
  brandValue: string;
  colorValue: string;
  onChangeBrand: (idx: string) => void;
  onChangeColor: (idx: string) => void;
};

export const Filters: React.FC<FiltersProps> = ({
  brandFilterList,
  brandValue,
  colorValue,
  onChangeBrand,
  onChangeColor,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-1">
        <p className="text-gray-400 text-xl">Brand: </p>
        <select
          name=""
          id=""
          className="font-bold outline-none text-xl"
          onChange={e => onChangeBrand(e.target.value)}
        >
          <option value="">Not Selected</option>
          {brandFilterList.map((brand, i) => (
            <option
              key={i}
              className={brandValue === brand ? 'bg-gray-200' : ''}
              value={brand}
            >
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-gray-400 text-xl">Color: </p>
        <select
          name=""
          id=""
          className="font-bold outline-none text-xl"
          onChange={e => onChangeColor(e.target.value)}
        >
          <option value="">Not selected</option>
          {ColorFilter.map((color, i) => (
            <option key={i} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
