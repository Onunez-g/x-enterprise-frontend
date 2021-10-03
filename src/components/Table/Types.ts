export interface TableProps {
  datasource: any[]
  columns: Column[]
  pageSize?: number
  onEdit?: (value: any) => void
  onDelete?: (value: any) => void
  className?: string
}

export interface PaginationProps {
  totalCount: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
  siblingCount?: number
  className?: string
}

export interface Column {
  dataField: string
  caption?: string
  cellRender?: (data: any) => JSX.Element
}