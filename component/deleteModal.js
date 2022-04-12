import React from 'react'
import { Input ,Modal} from 'antd';


function deleteModal() {
  return (
    <div>
      <Modal title="진짜삭제할거야?" visible={isModalVisible} onOk={()=>recordDelete()} onCancel={()=>cancel()} >

</Modal>
    </div>
  )
}

export default deleteModal