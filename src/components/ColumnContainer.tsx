import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import TrashIcon from '../icons/TrashIcon'
import { Column, Id } from '../types'
import { useState } from 'react'

interface ColumnContainerProps {
  column: Column
  deleteColumn: (id: Id) => void
  updateColumn: (id: Id, title: string) => void
}

export function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
}: ColumnContainerProps) {
  const [editMode, setEditMode] = useState(false)

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
    disabled: editMode,
  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
            bg-columnBackgroundColor
            opacity-40
            border-2
            border-rose-500
            w-[350px]
            h-[500px]
            max-h-[500px]
            rounded-md
            flex
            flex-col
    "
      ></div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
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
        {...attributes}
        {...listeners}
        onClick={() => setEditMode(true)}
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

          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-black focus:border-rose-500 border rounded outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => setEditMode(false)}
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return
                setEditMode(false)
              }}
            />
          )}
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
