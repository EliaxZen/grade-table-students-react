import { Student } from "@/types/Student";

type Props = {
  students: Student[];
}

export const GradeTable = ({ students }: Props) => {

  return (
    <table className="w-full border-gray-600 rounded-md overflow-hidden">
      <thead>
          <tr className="text-left bg-gray-800">
            <th className="p-3">Name</th>
            <th>Status</th>
            <th>Grade 1</th>
            <th>Grade 2</th>
            <th>Final Grade</th>
          </tr>
      </thead>
      <tbody>
        {students.map(item => (
          <tr key={item.id} className="text-gray-800 bg-gray-400 border-b border-gray-600">
            <td className="p-3 flex items-center">
              <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <div className="font-black">{item.name}</div>
                <div>{item.email}</div>
              </div>
            </td>
            <td>
              {item.active && <div className="px-3 py-2 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
              {!item.active && <div className="px-3 py-2 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
            </td>
            <td>{item.grade1}</td>
            <td>{item.grade2}</td>
            <td className="font-black">{item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : '--'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}