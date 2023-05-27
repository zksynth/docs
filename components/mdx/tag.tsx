interface PostTagProps {
  color: string
  children: React.ReactNode
}

export default function PostTag({ color, ...props }: PostTagProps) {

  const tagColor = (color: string) => {
    switch (color) {
      case 'teal':
        return 'bg-teal-500 text-teal-600'
      case 'rose':
        return 'bg-rose-500 text-rose-500'
      case 'purple':
        return 'bg-purple-500 text-purple-600'
      default:
        return 'bg-blue-500 text-blue-500'
    }
  }

  return (
    <div className={`text-sm inline-flex font-medium bg-opacity-25 rounded text-center px-1 ${tagColor(color)}`}>
      {props.children}
    </div>
  )
}