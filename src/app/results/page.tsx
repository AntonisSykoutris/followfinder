import { DataTable } from '@/components/DataTable/DataTable';
import { Follower, columns } from '@/components/DataTable/columns';

async function getData(): Promise<Follower[]> {
  return new Array(50).fill(null).map(() => ({
    id: `${Math.random()}`,
    nickname: 'ggg'
  }));
}

const page = async () => {
  const data = await getData();
  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
