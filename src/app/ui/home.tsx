import { useEffect, useState } from "react";
import { getAllData, storeData } from "../lib/firestorm.utils"
import UserList from "./userList";

export default function Home({ displayName, email }: { displayName: string, email: string }) {

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        born: ''
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const [dataSent, isDataSent] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = await storeData(formData);
        handleSyncDbData();
        isDataSent(result);

        setTimeout(() => {
            isDataSent(false);
            setFormData({
                name: '',
                lastName: '',
                born: ''
            });
        }, 2000);
        
        console.log(formData);
    };

    const [dbData, setDbData] = useState(Array<{id: string, name: string, lastName: string, born: number }>)

    useEffect(() => {
        handleSyncDbData();
    });

    async function handleSyncDbData() {
        let data = getAllData();

        console.log("Fetching data from database");

        data.then(users => setDbData(users));        
    }

    return (
        <div className="flex flex-col items-center h-screen">
            <h1 className="text-3xl mb-28 justify-center">Hello, {displayName}!</h1>
            <h2 className="text-2xl mb-4 font-bold">Send info to Firestorm</h2>

            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md flex">
                <div className="mb-4 mx-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4 mx-4">
                    <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4 mx-6">
                    <label htmlFor="born" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
                    <input
                        type="number"
                        id="born"
                        name="born"
                        value={formData.born}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </form>

            {dataSent && <h4 className="mt-3 font-semibold">Data stored in Firestorm successfully :{")"}</h4>}
            <div className="mt-12">
                <UserList data={dbData}></UserList>
            </div>
        </div>
    )
}