import { mybooking } from '@/Action/Server/booking';
import React from 'react';

const MyBooking = async () => {
  const bookingdata = await mybooking();
  
  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // Format status badge
  const getStatusBadge = (status) => {
    const statusStyles = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      confirmed: 'bg-green-100 text-green-800 border-green-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
      completed: 'bg-blue-100 text-blue-800 border-blue-200'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusStyles[status] || statusStyles.pending}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h1>
        <p className="text-gray-600">
          Total Bookings: <span className="font-semibold text-gray-800">{bookingdata.length}</span>
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Booking ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Duration
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Total Cost
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {bookingdata.length > 0 ? (
              bookingdata.map((booking, index) => (
                <tr 
                  key={booking.id || index} 
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 text-center py-4 text-sm text-gray-800 font-medium whitespace-nowrap">
                    #{booking.id || index + 1}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600 whitespace-nowrap">
                    {formatDate(booking.date)}
                  </td>
                  <td className="px-6 text-center py-4 text-sm text-gray-600 whitespace-nowrap">
                    {booking.duration} {booking.duration > 1 ? 'days' : 'day'}
                  </td>
                  <td className="px-6 text-center py-4 text-sm font-semibold text-gray-800 whitespace-nowrap">
                    ৳{booking.totalCost.toLocaleString()}
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap">
                    {getStatusBadge(booking.status)}
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap">
                    <button className="text-sm font-medium text-green-600 hover:text-green-700 hover:underline transition-colors">
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                  <div className="flex flex-col items-center">
                    <svg 
                      className="w-16 h-16 text-gray-300 mb-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                      />
                    </svg>
                    <p className="text-lg font-medium">No bookings found</p>
                    <p className="text-sm mt-1">Your booking history will appear here</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;