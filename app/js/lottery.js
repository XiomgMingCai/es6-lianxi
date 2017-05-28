import  'babel-polyfill'
import Base from './lottery/base.js'
import Timer from './lottery/timer'
import Calculate  from './lottery/calculate'
import Interface from './lottery/interface'
import $ from 'jquery'


// 多重继承
const copyProperties = function (target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
            let desc = Object.getOwnPropertyDescriptor(source, key)
            Object.defineProperties(target, key, desc)

        }
    }
}

const mix = function (...mixins) {
    class Mix {
    }
    for (let mixin of mixins) {
        copyProperties(Mix, mixin)
        copyProperties(Mix.prototype, mixin.prototype)
    }
    return Mix
}

class Lottery extends mix(Base, Calculate, Timer) {

    constructor(name = 'syy', cname = '11选5', issue = '**', state = '**') {
        super()
        this.name = name
        this.cname = cname
        this.issue = issue
        this.state = state
        this.el = ''
        this.omit = new Map()//遗漏
        this.open_code = new Set()//
        this.open_code_list = new Set()
        this.play_list = new Map()
        this.number = new Set()
        this.issue_el = '#coumnt'

        this.initPlayList()
        this.initNumbar();

        this.updateState()
        this.initEvent();
    }


    updateState() {
        let self = this;
        this.getState().this(function (res) {
            self.issue = res.issue
            self.end_time = res.end_time
            self.state = res.state
            $(self.issue_el).title(res.issue);

            self.countdown(res, end_time,function (itme) {
                $(self.countdown_el).html(time)
            },function () {
                setTimeout(function () {
                    self.updateState()
                    self.getOmit(self.issue).then(function () {

                    })
                    self.getOpenCode(self.issue).then(function () {

                    })
                },500)
            })
        })
    }

    initEvent() {
        let self = this
        $('#plays').on('click','li',self.changePlayNav.bind(self))
        $('.boll-list').on('click', '.btn-boll', self.toggleCodeActive.bind(self))
    }
}

export default Lottery
