const { generateAttrStr, generateEventsStr } = require('./index')

function generateComponent(data) {
    let result = ''
    switch (data.type) {
        case 'input':
            result += generateInputComponent(data)
            break
        case 'select':
            result += generateSelectComponent(data)
            break
        case 'date-picker':
            result += generateDatePickerComponent(data)
            break
    }

    return result
}

function generateInputComponent(data) {
    return `<el-input v-model="searchData.${data.prop}" ${generateAttrStr(data.attrs)} ${generateAttrStr(data.dattrs, false, true)} ${generateEventsStr(data.events)} />`
}

function generateSelectComponent(data) {
    return (
`<el-select v-model="searchData.${data.prop}" ${generateAttrStr(data.attrs)} ${generateAttrStr(data.dattrs, false, true)} ${generateEventsStr(data.events)}>
                                <el-option
                                    v-for="item in ${data.options}"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>`)
}

function generateDatePickerComponent(data) {
    return (
        `<el-date-picker 
                                        v-model="searchData.${data.prop}"
                                        ${generateAttrStr(data.attrs, true)}
                                        ${generateAttrStr(data.dattrs, false, true)}
                                        ${generateEventsStr(data.events, true)}
                                    >
                                    </el-date-picker>`)
}

module.exports = {
    generateComponent
}