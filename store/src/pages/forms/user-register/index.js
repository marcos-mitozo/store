import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, Card } from 'antd';
import { formItemLayout, tailFormItemLayout, formCard } from '../forms-style'

const { Option } = Select;

export const Register = () => {
    const [form] = Form.useForm()

    const onFinish = values => {
        console.log('Received values of form: ', values)
    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+92</Option>
                <Option value="87">+97</Option>
            </Select>
        </Form.Item>
    )

    return (
        <Card style={formCard} title="Cadastro">
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    prefix: '92',
                }}
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
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'Por favor, insira um e-mail válido.',
                        },
                        {
                            required: true,
                            message: 'E-mail obrigatório',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Senha"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, insira a senha',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirmar senha"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Repita a senha para confirmar',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Contato (telefone)"
                    rules={[{ required: true, message: 'Por favor, insira seu número de telefone' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item name="agreement" valuePropName="checked" {...tailFormItemLayout}>
                    <Checkbox>
                        Declaro que li e concordo com os <a href="">termos de uso</a>
                    </Checkbox>
                </Form.Item>
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