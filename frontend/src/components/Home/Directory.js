import { EmailIcon, PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import {
    Box,
    Heading,
    HStack,
    Spacer,
    Flex,
    Text,
    VStack,
    IconButton,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Card } from '../SharedComponents/Card'
import FormInput from '../SharedComponents/FormInput'
import { BrowserView, MobileView } from 'react-device-detect'

const Directory = () => {
    const [name, setName] = useState('')
    const [contactList, setContactList] = useState([
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
        {
            name: 'First Last',
            phone: '(805) 555-5555',
        },
    ])

    return (
        <Box>
            <BrowserView>
                <DirectoryBrowser setName={setName} contactList={contactList} />
            </BrowserView>
            <MobileView>
                <DirectoryMobile setName={setName} contactList={contactList} />
            </MobileView>
        </Box>
    )
}

const DirectoryBrowser = ({ contactList, setName }) => {
    return (
        <Flex flexDir="row">
            <HeaderAndSearch setName={setName} minW="400px" mr="90px" />
            <VStack spacing={4}>
                {contactList.map((contact) => {
                    return (
                        <Contact
                            name={contact.name}
                            number={contact.phone}
                            width="500px"
                        />
                    )
                })}
            </VStack>
        </Flex>
    )
}

const DirectoryMobile = ({ contactList, setName }) => {
    return (
        <VStack align="left" w="95%" ml="2.5%" spacing={4}>
            <HeaderAndSearch setName={setName} mb="30px" />
            {contactList.map((contact) => {
                return (
                    <Contact
                        name={contact.name}
                        number={contact.phone}
                        w="100%"
                    />
                )
            })}
        </VStack>
    )
}

const Contact = ({ name, number, ...rest }) => {
    return (
        <Card {...rest}>
            <HStack>
                <VStack align="left">
                    <Text fontWeight="bold" fontSize="20px">
                        {name}
                    </Text>
                    <Text>{number}</Text>
                </VStack>
                <Spacer />
                <HStack align="right" spacing={8}>
                    <IconButton
                        variant="animated"
                        icon={<PhoneIcon w={8} h={8} />}
                    />
                    <IconButton
                        variant="animated"
                        icon={<EmailIcon w={8} h={8} />}
                    />
                </HStack>
            </HStack>
        </Card>
    )
}

const HeaderAndSearch = (props, { setName }) => {
    return (
        <Box {...props}>
            <Heading>Directory</Heading>
            <FormInput
                leftElement={<SearchIcon />}
                mt={5}
                id="search"
                label="Search by name"
                onChange={(e) => setName(e.target.value)}
            />
        </Box>
    )
}

export default Directory
