import React, { useState } from 'react'
import { Form, Input, Tooltip, Button, InputNumber, Tag, Card } from 'antd'
import { PlusOutlined, QuestionCircleTwoTone } from '@ant-design/icons'
import { formItemLayout, tailFormItemLayout, formCard } from '../forms-style'
import { postData } from "../../../components/fetch"

export function ProductRegister() {
    const [form] = Form.useForm();
    let [tags, setTags] = useState([])
    let [inputVisible, setInputVisible] = useState(false)
    let [inputValue, setInputValue] = useState('')

    function handleInputConfirm() {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        setTags(tags)
        setInputVisible(false)
        setInputValue('')
    }

    function handleClose(removedTag) {
        console.log("Tag removida: ", removedTag)
        tags = tags.filter(tag => tag !== removedTag);
    }

    function onFinish(values) {
        values.slug = "um-slug-qualquer-2"
        values.tags = tags
        postData("jewels", values)
    }

    return (
        <Card style={formCard} title="Novo Produto">
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Nome"
                    rules={[
                        {
                            required: true,
                            message: 'Nome obrigatório',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Descrição"
                    rules={[
                        {
                            required: true,
                            message: 'Descrição obrigatória',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="price"
                    label="Preço"
                    rules={[
                        {
                            required: true,
                            message: 'Preço obrigatório',
                        },
                    ]}
                    hasFeedback
                >
                    <InputNumber
                        formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/R\$\s?|(,*)/g, '')}
                    />
                </Form.Item>
                <Form.Item
                    name="tags"
                    label="Tags"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Insira ao menos uma tag para o produto.',
                        }
                    ]}
                >
                    <div>
                        {
                            tags.map(tag => {
                                const isLongTag = tag.length > 20;
                                const tagElem = (
                                    <Tag key={tag} closable={true} onClose={() => handleClose(tag)}>
                                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                    </Tag>
                                )
                                return isLongTag ? (
                                    <Tooltip title={tag} key={tag}>
                                        {tagElem}
                                    </Tooltip>
                                ) : (
                                        tagElem
                                    )
                            })
                        }
                        {inputVisible && (
                            <Input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onBlur={() => handleInputConfirm()}
                                onPressEnter={() => handleInputConfirm()}
                            />
                        )}
                        {!inputVisible && (
                            <Tag className="site-tag-plus" onClick={() => setInputVisible(true)}>
                                <PlusOutlined /> Nova Tag
                            </Tag>
                        )}
                    </div>
                </Form.Item>
                <Form.Item
                    name="imageURI"
                    label="Imagem"
                    rules={[
                        {
                            required: true,
                            message: 'Endereço de imagem obrigatório',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    name="slug"
                    label="Slug"
                    rules={[
                        {
                            required: true,
                            message: 'Slug obrigatório',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                    <Tooltip title="O slug será o identificador único desse produto (não pode se repetir)">
                        <QuestionCircleTwoTone twoToneColor="orange" />
                    </Tooltip>
                </Form.Item>*/}

                <Form.Item {...tailFormItemLayout}>
                    <div className="row">
                        <Button type="primary" htmlType="submit">
                            Confirmar
                    </Button>
                        <Button type="default" style={{ marginLeft: "10px" }}>
                            Cancelar
                    </Button>
                    </div>
                </Form.Item>
            </Form>
        </Card>
    )
};