import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MyPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Hiển thị tất cả số trang nếu tổng số trang nhỏ hơn hoặc bằng 5
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Luôn hiển thị trang đầu tiên
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // Hiển thị 2 số trang trước và sau `currentPage`
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Luôn hiển thị trang cuối cùng
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      {/* Nút Previous */}
      <button
        className={`px-3 py-1 rounded-lg ${
          currentPage === 1 ? 'bg-gray_hover text-gray cursor-not-allowed' : 'bg-gray_hover'
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Số trang */}
      {generatePageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            className={`px-3 py-1 rounded-lg ${
              currentPage === page ? 'bg-sky_blue_light_500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-3 py-1 text-gray-500">
            {page}
          </span>
        )
      )}

      {/* Nút Next */}
      <button
        className={`px-3 py-1 rounded-lg ${
          currentPage === totalPages ? 'bg-gray_hover text-gray cursor-not-allowed' : 'bg-gray_hover'
        }`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default MyPagination;
