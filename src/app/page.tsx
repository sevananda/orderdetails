import Image from "next/image";

export default function Home() {
  return (
    // <div >
    //       <div style={{ backgroundColor: 'white', color: '#000000', fontFamily: 'Arial, sans-serif', margin: 0, padding: '20px' }}>
    //   <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffff', padding: '20px', borderRadius: '10px' }}>
    //     <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Account</h1>
    //     <h2 style={{ fontSize: '20px', fontWeight: 'normal', marginBottom: '10px' }}>Order #66c851968ca5ea7f711216d9</h2>
    //     <p style={{ fontSize: '14px', marginBottom: '30px' }}>Placed on August 23 at 2024 at 2:38 PM</p>

    //     <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
    //       <h3 style={{ fontSize: '18px', color: '#000000', marginBottom: '20px' }}>Order History</h3>
    //       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    //         <thead>
    //           <tr style={{ textAlign: 'left', color: '#000000' }}>
    //             <th style={{ paddingBottom: '10px' }}>Product</th>
    //             <th style={{ paddingBottom: '10px' }}>SKU</th>
    //             <th style={{ paddingBottom: '10px' }}>Price</th>
    //             <th style={{ paddingBottom: '10px' }}>Quantity</th>
    //             <th style={{ paddingBottom: '10px' }}>Total</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr style={{ borderTop: '1px solid #333' }}>
    //             <td style={{ padding: '10px 0' }}>SLAY Variety Pack (Combo)</td>
    //             <td>MMGC-250</td>
    //             <td>₹ 400</td>
    //             <td>3</td>
    //             <td>₹ 1200</td>
    //           </tr>
    //           <tr style={{ borderTop: '1px solid #333' }}>
    //             <td style={{ padding: '10px 0' }}>SLAY Coffee Madras Mud 100% (Pack 1)</td>
    //             <td>MMGC-250</td>
    //             <td>₹ 750</td>
    //             <td>1</td>
    //             <td>₹ 750</td>
    //           </tr>
    //           <tr style={{ borderTop: '1px solid #333' }}>
    //             <td style={{ padding: '10px 0' }}>SLAY Variety Pack (Combo)</td>
    //             <td>MMGC-250</td>
    //             <td>₹ 550</td>
    //             <td>1</td>
    //             <td>₹ 550</td>
    //           </tr>
    //         </tbody>
    //       </table>

    //       <p style={{ margin: '20px 0 10px 0' }}>Fulfilled August 23 at 2024 at 2:38 PM</p>
    //       <h1><a href="#" style={{ color: '#000000', textDecoration: 'bold' }}>Track shipment</a></h1>
    //       <p>Ekart Logistics #SHTP0000213425</p>

    //       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
    //         <div >
    //           <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>Download Invoice</a>
    //         </div>
    //         </div>
    //         <div style={{ textAlign: 'right', flex: 1 }}>
    //           <p>Subtotal: ₹ 2500</p>
    //           <p>Shipping (Prepaid Shipping Charges): ₹ 0</p>
    //           <p>Tax (CGST 2.5%): ₹ 0</p>
    //           <p>Tax (IGST 2.5%): ₹ 0</p>
    //           <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '10px' }}>Total: ₹ 2500</p>
    //         </div>
          
    //     </div>
    //   </div>
    // </div>
    // </div>


    <div style={{ backgroundColor: '#121212', color: '#fff', fontFamily: 'Arial, sans-serif', margin: 0, padding: '20px' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#1f1f1f', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Account</h1>
      <h2 style={{ fontSize: '20px', fontWeight: 'normal', marginBottom: '10px' }}>Order #66c851968ca5ea7f711216d9</h2>
      <p style={{ fontSize: '14px', marginBottom: '30px' }}>Placed on August 23 at 2024 at 2:38 PM</p>

      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px' }}>
        <h3 style={{ fontSize: '18px', color: '#ff4d6d', marginBottom: '20px' }}>Order History</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#dcdcdc' }}>
              <th style={{ paddingBottom: '10px' }}>Product</th>
              <th style={{ paddingBottom: '10px' }}>SKU</th>
              <th style={{ paddingBottom: '10px', textAlign: 'right' }}>Price</th>
              <th style={{ paddingBottom: '10px', textAlign: 'right' }}>Quantity</th>
              <th style={{ paddingBottom: '10px', textAlign: 'right' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop: '1px solid #333' }}>
              <td style={{ padding: '10px 0' }}>SLAY Variety Pack (Combo)</td>
              <td>MMGC-250</td>
              <td style={{ textAlign: 'right' }}>₹ 400</td>
              <td style={{ textAlign: 'right' }}>3</td>
              <td style={{ textAlign: 'right' }}>₹ 1200</td>
            </tr>
            <tr style={{ borderTop: '1px solid #333' }}>
              <td style={{ padding: '10px 0' }}>SLAY Coffee Madras Mud 100% (Pack 1)</td>
              <td>MMGC-250</td>
              <td style={{ textAlign: 'right' }}>₹ 750</td>
              <td style={{ textAlign: 'right' }}>1</td>
              <td style={{ textAlign: 'right' }}>₹ 750</td>
            </tr>
            <tr style={{ borderTop: '1px solid #333' }}>
              <td style={{ padding: '10px 0' }}>SLAY Variety Pack (Combo)</td>
              <td>MMGC-250</td>
              <td style={{ textAlign: 'right' }}>₹ 550</td>
              <td style={{ textAlign: 'right' }}>1</td>
              <td style={{ textAlign: 'right' }}>₹ 550</td>
            </tr>
          </tbody>
        </table>

        <p style={{ margin: '20px 0 10px 0' }}>Fulfilled August 23 at 2024 at 2:38 PM</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Track shipment</p>
            <p>Ekart Logistics #SHTP0000213425</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href="#" style={{ color: '#ff4d6d', textDecoration: 'none' }}>Download Invoice</a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #333', paddingTop: '10px' }}>
          <div style={{ flex: 1 }}>
            <p>Subtotal:</p>
            <p>Shipping (Prepaid Shipping Charges):</p>
            <p>Tax (CGST 2.5%):</p>
            <p>Tax (IGST 2.5%):</p>
            <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '10px' }}>Total:</p>
          </div>
          <div style={{ textAlign: 'right', flex: 1 }}>
            <p>₹ 2500</p>
            <p>₹ 0</p>
            <p>₹ 0</p>
            <p>₹ 0</p>
            <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '10px' }}>₹ 2500</p>
          </div>
        </div>
      </div>
    </div>

    {/* Media query for responsiveness */}
    <style jsx>{`
      @media (max-width: 600px) {
        div[style*="display: 'flex'"] {
          display: block !important;
          text-align: left !important;
        }

        div[style*="text-align: 'right'"] {
          text-align: left !important;
        }

        div[style*="justify-content: 'space-between'"] {
          display: block !important;
        }
      }
    `}</style>
  </div>
  );
}
