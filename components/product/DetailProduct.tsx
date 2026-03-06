import { ProductEntity } from '@/entity/product'
import Modal from '../modal'
import Image from 'next/image';

function DetailProduct({ product, open, onClose }: { product: ProductEntity; open: boolean; onClose: () => void }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className='bg-white'
    >
      <div className="">
        <div className="mb-4 flex">
          <h2 className="text-center text-2xl flex-1">Thông tin chi tiết</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="mb-4">
          <table className="text-[#7a5a7e] bg-white w-full rounded-2xl">
            <tbody>
              <tr>
                <td className="px-4 py-2 w-1/3">Danh mục</td>
                <td className="px-4 py-2 text-[#1E3C78] font-semibold">{product.category}</td>
              </tr>
              <tr className="bg-[#f7f7f7]">
                <td className="px-4 py-2 w-1/3">Tên sản phẩm</td>
                <td className="px-4 py-2 text-[#1E3C78] font-semibold">{product.name}</td>
              </tr>
              <tr className="bg-[#f7f7f7]">
                <td className="px-4 py-2 w-1/3">Xuất xứ</td>
                <td className="px-4 py-2 text-[#1E3C78] font-semibold">Việt Nam</td>
              </tr>
              <tr className="bg-[#f7f7f7]">
                <td className="px-4 py-2 w-1/3">Chất liệu</td>
                <td className="px-4 py-2 text-[#1E3C78] font-semibold">{product.material}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Image src={product.images[0]} alt={product.name} className="mx-auto w-full mb-4" width={600} height={600} />
        <div className="mb-4">
          <p className='font-bold mb-2'>Đặc điểm nổi bật:</p>
          <p>{product.description}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2">Hướng dẫn sử dụng:</p>
          <ul className="list-disc list-inside">
            <li>Giặt sản phẩm trước khi sử dụng lần đầu để loại bỏ bụi vải còn sót lại.</li>
            <li>Cho bé mặc sản phẩm có kích thước phù hợp với độ tuổi và thể trạng để đảm bảo sự thoải mái khi vận động.</li>
            <li>Kiểm tra khóa, cúc, quai dán trước khi mặc cho bé để đảm bảo an toàn.</li>
            <li>Thay quần áo ngay khi bị ẩm ướt, ra nhiều mồ hôi hoặc dính bẩn để giữ da bé luôn khô thoáng.</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2">Hướng dẫn giặt ủi:</p>
          <ul className="list-disc list-inside">
            <li>Giặt tay hoặc giặt máy ở chế độ nhẹ, nhiệt độ nước không quá 30°C.</li>
            <li>Lộn trái sản phẩm khi giặt để hạn chế phai màu và xù lông.</li>
            <li>Sử dụng bột giặt/nước giặt chuyên dụng cho trẻ em, tránh chất tẩy mạnh.</li>
            <li>Không ngâm sản phẩm quá lâu, không giặt chung với đồ sẫm màu.</li>
            <li>Không vắt xoắn mạnh, không sấy khô ở nhiệt độ cao.</li>
            <li>Phơi nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp để giữ form và màu vải.</li>
            <li>Bảo quản nơi sạch sẽ, tránh ẩm mốc.</li>
          </ul>
        </div>
      </div>
    </Modal>
  )
}

export default DetailProduct