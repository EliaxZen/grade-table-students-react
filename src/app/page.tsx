
import { GradeTable } from './../components/GradeTable';
import { students } from '@/data/students';

const Page = () => {
  return (
    <div className='container mx-auto'>
      <GradeTable students={students}/>
    </div>
  )
}
export default Page;