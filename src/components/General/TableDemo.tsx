import React, { ChangeEvent, Key, useCallback, useMemo, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  User,
  Pagination,
  Selection,
  SortDescriptor
} from '@nextui-org/react';
import { columns } from '@/lib/data';
import { SearchIcon } from 'lucide-react';
import UIAvatar from 'react-ui-avatars';
import { Users } from '@/lib/types';

const INITIAL_VISIBLE_COLUMNS = ['name', 'date'];

type Props = {
  users: Users[];
};

export default function TableDemo({ users }: Props) {
  const [filterValue, setFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'age',
    direction: 'ascending'
  });

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter(column =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = users;

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(user =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredUsers;
  }, [users, hasSearchFilter, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: Users, b: Users) => {
      const first = a[sortDescriptor.column as keyof Users] as number;
      const second = b[sortDescriptor.column as keyof Users] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((user: Users, columnKey: Key) => {
    const cellValue = user[columnKey as keyof Users];

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{
              radius: 'lg',
              icon: <UIAvatar name={user.name} size={128} />
            }}
            name={cellValue}
          ></User>
        );
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-small capitalize'>{cellValue}</p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue('');
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className='flex flex-col gap-4'>
        <div className='flex items-end justify-between gap-3'>
          <Input
            isClearable
            className='w-full sm:max-w-[44%]'
            placeholder='Search by name...'
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-default-400 text-small'>
            Total {users.length} users
          </span>
          <label className='text-default-400 text-small flex items-center'>
            Rows per page:
            <select
              className='text-default-400 text-small bg-transparent outline-none'
              onChange={onRowsPerPageChange}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, users.length, onRowsPerPageChange, onClear]);

  const bottomContent = useMemo(() => {
    return (
      <div className='flex items-center justify-center px-2 py-2 lg:justify-between'>
        <span className='text-small text-default-400 hidden w-[30%] lg:inline-block'></span>
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className='hidden w-[30%] justify-end gap-2 sm:flex'>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [page, pages, onPreviousPage, onNextPage]);

  return (
    <Table
      aria-label='Example table with custom cells, pagination and sorting'
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      classNames={{
        wrapper: 'max-h-[382px]'
      }}
      selectedKeys={selectedKeys}
      selectionMode='none'
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement='outside'
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {column => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No users found'} items={sortedItems}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
