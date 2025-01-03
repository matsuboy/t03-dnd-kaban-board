import TrashIcon from '../icons/TrashIcon'
import { Column, Id } from '../types'

interface ColumnContainerProps {
  column: Column
  deleteColumn: (id: Id) => void
}

export function ColumnContainer({
  column,
  deleteColumn,
}: ColumnContainerProps) {
  return (
    <div
      className="
            bg-columnBackgroundColor
            w-[350px]
            h-[500px]
            max-h-[500px]
            rounded-md
            flex
            flex-col
  "
    >
      {/**Column title */}
      <div
        className="
                bg-mainBackgroundColor
                text-md
                font-bold
                h-[60px]
                rounded-md
                rounded-b-none
                p-3
                border-4
                border-columnBackgroundColor
                cursor-grab
                flex
                items-center
                justify-between
                
      "
      >
        <div className="flex gap-2 items-center">
          <div
            className="
                flex
                justify-center
                items-center
                bg-columnBackgroundColor
                px-2
                py-1
                text-sm
                rounded-full
                
        "
          >
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id)
          }}
          className="
                      stroke-gray-500
                      hover:stroke-white
                      hover:bg-columnBackgroundColor
                      rounded
                      px-1
                      py-2
        "
        >
          <TrashIcon />
        </button>
      </div>
      {/**Column task container */}
      <div className="flex flex-grow">Content</div>
      {/**Column footer */}
      <div>Footer</div>
    </div>
  )
}
