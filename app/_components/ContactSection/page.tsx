'use client'
import { Button, Text, TextInput, Title } from '@mantine/core';
import classes from './ContactSection.module.css';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import axios from 'axios';
export function ContactSection() {
    const form = useForm({
        initialValues: {
            email: '',
        },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
        },
    });
    const [hasSubscribeEmail, setHasSubscribeEmail] = useState(false);
    const [showError, setShowError] = useState(false);
    const onSubmit = async () => {
        try {
            setHasSubscribeEmail(true);
            const email = form.values.email;
            if (email.length) {
                await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newsletter-signups`, {
                    data: {
                        email
                    }
                })
            }
        } catch {
            setShowError(true);
        }
    }
    return (
        <div className={classes.wrapper}>
            {showError ? (<h4>Could not sign up for the newsletter</h4>) :
                hasSubscribeEmail ? <h4>Thank you for subscribe email!</h4> : (
                    <>
                        <div>
                            <Title>Contact Us</Title>
                            <Text>
                                Contact us
                                Leave your email and we will get back to you within 24 hours
                            </Text>
                        </div>
                        <div className={classes.form}>
                            <form onSubmit={form.onSubmit(onSubmit)}>
                                <div className={classes.controls}>
                                    <TextInput
                                        required
                                        value={form.values.email}
                                        placeholder="Enter your email address"
                                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                        error={form.errors.email && 'Invalid email'}
                                        classNames={{ input: classes.input }}
                                    />
                                    <Button type="submit" className={classes.control}>Subscribe</Button>
                                </div>
                            </form>
                        </div>
                    </>
                )
            }
        </div>
    )
}