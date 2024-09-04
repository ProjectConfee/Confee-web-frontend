import React, { useState } from 'react';

const StallDetailsForm = () => {
    const [stallNumber, setStallNumber] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [stallDetails, setStallDetails] = useState<{ stallNumber: string; location: string }[]>([]);
    const [isDataAdded, setIsDataAdded] = useState<boolean>(false); // To track if data has been added

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newStallDetail = { stallNumber, location };
        setStallDetails([...stallDetails, newStallDetail]);

        // Reset the form fields
        setStallNumber('');
        setLocation('');

        // Set data added to true to show the table
        setIsDataAdded(true);
    };

    return (
        <div className="bg-white p-6 rounded-2xl w-full max-w-full mx-auto mb-10">
            {/* Form */}
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-6 text-center">Stall Details</h2>

                <div className="flex items-end space-x-4">
                    {/* Stall Number Dropdown */}
                    <div className="w-2/5">
                        <label htmlFor="stallNumber" className="block text-gray-700 font-medium mb-2">Stall Number</label>
                        <select
                            id="stallNumber"
                            value={stallNumber}
                            onChange={(e) => setStallNumber(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                        >
                            <option value="" disabled>Select Stall Number</option>
                            <option value="Stall 1">Stall 1</option>
                            <option value="Stall 2">Stall 2</option>
                            <option value="Stall 3">Stall 3</option>
                            <option value="Stall 4">Stall 4</option>
                            <option value="Stall 5">Stall 5</option>
                            <option value="Stall 6">Stall 6</option>
                            <option value="Stall 7">Stall 7</option>
                            <option value="Stall 8">Stall 8</option>
                            <option value="Stall 9">Stall 9</option>
                            <option value="Stall 10">Stall 10</option>
                        </select>
                    </div>

                    {/* Location Dropdown */}
                    <div className="w-2/5">
                        <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
                        <select
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                        >
                            <option value="" disabled>Select Location</option>
                            <option value="Open Area">Open Area</option>
                            <option value="W001">W001</option>
                            <option value="W002">W002</option>
                            <option value="S104">S104</option>
                            <option value="S203">S203</option>
                            <option value="S204">S204</option>
                            <option value="S205">S205</option>
                            <option value="E401">E401</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="w-1/5">
                        <button
                            type="submit"
                            className="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>

            {/* Conditional Rendering: Show Image or Table */}
            {!isDataAdded ? (
                <div className="mt-8 flex justify-center">
                    <img src="src/assets/no_schedule.jpg" alt="Placeholder" className="w-1/3 h-auto" />
                </div>
            ) : (
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Added Stall Details</h3>
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Stall Number</th>
                            <th className="py-2 px-4 border-b">Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        {stallDetails.map((detail, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b text-center">{detail.stallNumber}</td>
                                <td className="py-2 px-4 border-b text-center">{detail.location}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default StallDetailsForm;
