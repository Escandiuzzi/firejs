import { Key } from "react";

export default function UserList({ data }: { data: Array<{ id: String, name: String, lastName: String, born: number }> }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Records</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map(user => (
                        <tr key={user.id as Key}>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.lastName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.born}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}