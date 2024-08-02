import React, {
  ChangeEvent,
  Key,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
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
  Link,
  Pagination,
  Selection,
  SortDescriptor
} from '@nextui-org/react';
import { columns } from '@/lib/data';
import { SearchIcon } from 'lucide-react';
import UIAvatar from 'react-ui-avatars';
import { Users } from '@/lib/types';
import { generateBackgroundColor } from '@/lib/utils';

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
    column: 'name',
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

  const paginatedSortedItems = useMemo(() => {
    // Sorting the filteredItems array based on the sortDescriptor
    const sortedItems = [...filteredItems].sort((a: Users, b: Users) => {
      let first, second;

      if (sortDescriptor.column === 'date') {
        // Convert date strings to Date objects for comparison
        first = new Date(a['id' as keyof Users] as string);
        second = new Date(b['id' as keyof Users] as string);
        console.log(first);
        console.log(second);
      } else {
        first = a[sortDescriptor.column as keyof Users] as number;
        second = b[sortDescriptor.column as keyof Users] as number;
      }

      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });

    // Paginating the sorted items
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return sortedItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage, sortDescriptor]);

  const renderCell = useCallback((user: Users, columnKey: Key) => {
    const cellValue = user[columnKey as keyof Users];

    switch (columnKey) {
      case 'name':
        const backgroundColor = generateBackgroundColor(user.name);
        return (
          <User
            avatarProps={{
              radius: 'lg',
              icon: (
                <UIAvatar
                  name={user.name}
                  background={backgroundColor}
                  size={128}
                />
              )
            }}
            name={cellValue}
            description={
              <Link href={user.href} size='sm' isExternal>
                @profile/{user.name}
              </Link>
            }
          >
            {user.href}
          </User>
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
          <span className='text-small text-default-400'>
            Total {users.length} users
          </span>
          <label className='flex items-center text-small text-default-400'>
            Rows per page:
            <select
              className='bg-transparent text-small text-default-700 outline-none hover:cursor-pointer hover:text-[#833ab4]'
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
        <span className='hidden w-[30%] text-small text-default-400 lg:inline-block'></span>
        <Pagination
          isCompact
          showControls
          showShadow
          initialPage={1}
          color='primary'
          page={page}
          total={pages ? pages : 1}
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
      <TableBody emptyContent={'No users found'} items={paginatedSortedItems}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
