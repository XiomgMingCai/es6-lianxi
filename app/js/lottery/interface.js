import $ from 'jquery'

export default  class interface {
    /**
     * 获取遗漏
     * @param issue
     * @returns {Promise}
     */
    getOmit(issue) {
        let self = this
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue
                },
                dataType: "json",
                success: function (res) {
                    self.setOmit(res.data)//把当前数据保存到当前对象

                    resolve.call(self, res)
                },
                error: (err) => {
                    reject.call(self, err)
                }
            })
        })
    }

    getOpenCode(issue) {
        let self = this
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                data: {
                    issue
                },
                dataType: 'json',
                success: function (res) {
                    self.setOpenCode(res.data) //对象数据共享

                    resolve.call(self, res)
                },
                error: function (err) {
                    resolve.call(self, err)
                }
            })
        })

    }

    /**
     * 获取当前状态
     * @param issue
     * @returns {Promise}
     */
    getState(issue) {
        let self = this
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/state',
                data: {
                    issue
                },
                dataType: 'json',
                success: function (res) {
                    resolve.call(self, res)
                },
                error: function (err) {
                    resolve.call(self,err)
                }
            })
        })
    }
}