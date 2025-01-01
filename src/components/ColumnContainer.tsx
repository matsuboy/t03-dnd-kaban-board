import { Column } from '../types'

interface ColumnContainerProps {
  column: Column
}

export function ColumnContainer({ column }: ColumnContainerProps) {
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
        <button>Delete</button>
      </div>
      {/**Column task container */}
      <div className="flex flex-grow">Content</div>
      {/**Column footer */}
      <div>Footer</div>
    </div>
  )
}
