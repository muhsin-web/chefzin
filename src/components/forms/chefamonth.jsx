'use client'

import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Text,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  CheckboxGroup,
  Stack,
  RadioGroup,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { MultiSelect } from 'react-multi-select-component'
import { useRouter } from 'next/router'

const Form1 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Contact Information
        </Heading>
  
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={500} color={'#000'}>
            Fullname
          </FormLabel>
          <Input id="first-name" placeholder="enter fullname" />
        </FormControl>
  
        <FormControl mt={{base: "10%", lg: "3%"}}>
          <FormLabel htmlFor="first-name" fontWeight={500} color={'#000'}>
            Email
          </FormLabel>
          <Input id="first-name" placeholder="enter email" />
        </FormControl>
  
        <FormControl mt={{base: "10%", lg: "3%"}}>
          <FormLabel htmlFor="first-name" fontWeight={500} color={'#000'}>
            Phone Number
          </FormLabel>
          <Input id="first-name" placeholder="enter phone number" />
        </FormControl>
  
      </>
    )
  }

const Form2 = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [checked, setChecked] = useState(false)

  
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      Event Details
      </Heading>

      <Text fontWeight={600} color={'#000'} mt={{base: "10%", lg: "3%"}}>Location:</Text>

      <FormControl>
        <FormLabel htmlFor="email" fontWeight={500} color={'#000'}>
          Address
        </FormLabel>
        <Input placeholder='Enter full address for event' id="email" type="text" />
      </FormControl>

      <Flex mt={{base: "10%", lg: "3%"}}>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={500} color={'#000'}>
          City
          </FormLabel>
          <Input
          placeholder="Enter city"
          size="md"
          type="text"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={500} color={'#000'}>
          State/Province
          </FormLabel>
          <Input
          placeholder="Enter your state/province"
          size="md"
          type="text"
          />
        </FormControl>

      </Flex>
        <Text fontWeight={600} color={'#000'} mt={{base: "10%", lg: "3%"}}>Duration:</Text>

        <Flex mb={{md: "10%", lg: "3%"}}>
            <FormControl mr={{md: "15%", lg: "5%"}}>
            <FormLabel htmlFor="first-name" fontWeight={500} color={'#000'}>
            Start Date:
            </FormLabel>
            <Input
            placeholder="Select Date event starts"
            size="md"
            type="date"
            />
            </FormControl>

            <FormControl>
            <FormLabel htmlFor="last-name" fontWeight={500} color={'#000'}>
            End Date:
            </FormLabel>
            <Input
            placeholder="Select Date event ends"
            size="md"
            type="date"
            />
            </FormControl>
        </Flex>

        <FormControl mt={{base: "10%", lg: "3%"}}>
          <Checkbox isChecked={checked} onChange={() => setChecked(!checked)} defaultChecked>Monthly subscription</Checkbox>
      </FormControl>

    </>
  )
}

const Form3 = ({selected, setSelected, options}) => {
    const [value, setValue] = useState('')
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Booking  Details
      </Heading>
      <FormControl>
        <FormLabel htmlFor="first-name" fontWeight={500} color={'#000'}>
        Select cuisines you are interested in
        </FormLabel>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
      </FormControl>
        {
          selected.length > 0 ? (
            <Flex gap={2} mt={{base: "10%", lg: "3%"}}>
             { selected.map((selected, index) => (
                <Box key={index} padding={'10px 20px'} rounded={'2xl'} backgroundColor={'#eee'}>{selected.label}</Box>
              ))}
            </Flex>
          ):null
        }

        <FormControl mt={{base: "10%", lg: "3%"}}>
            <FormLabel fontWeight={500} color={'#000'} htmlFor="last-name">
            Special Requests/Comments
            </FormLabel>
            <Input
            placeholder="comment here"
            size="md"
            type="text"
            />
        </FormControl>


        <Text mt={{base: "10%", lg: "3%"}} fontWeight={500} color={'#000'} mb={0}>Your preferred contact method?</Text>
        <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel htmlFor="first-name" fontWeight={'normal'}>
        How do you want Chefzin to primarily reach out:
        </FormLabel>
            <RadioGroup onChange={setValue} value={value}>
            <Stack direction='row'>
                <Radio value='1'>Messaging</Radio>
                <Radio value='2'>Calls</Radio>
            </Stack>
            </RadioGroup>
        </FormControl>
      

    </>
  )
}


export default function ChefAMonth() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)
  const options = [
    { label: "Meal Prep", value: "Meal Prep" },
    { label: "Nigerian", value: "Nigerian" },
    { label: "Chinese", value: "Chinese" },
    { label: "British", value: "British" },
    { label: "Italian", value: "Italian" },
    { label: "Pan Asian", value: "Pan Asian" },
    { label: "Fine Dining", value: "Fine Dining" },
    { label: "BBQ", value: "BBQ" },
    { label: "Indian", value: "Indian" },
    { label: "Mexican", value: "Mexican" },
    { label: "Christmas", value: "Christmas" },
    { label: "Canapé Party", value: "Canapé Party" },
    { label: "Middle Eastern", value: "Middle Eastern" },
  ];
  const [selected, setSelected] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter();

  const handleSubmit = () => {
    
  }

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={1000}
        p={6}
        m="10px auto"
        as="form">
        <Progress value={progress} height={1} mb="5%" mx="1%" isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 selected={selected} setSelected={setSelected} options={options} />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>

              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  onOpen()
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>THANK YOU</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Thank you for providing the details. The Chefzin team will reach out to you within 5-20 minutes to commence arrangements tailored to your specific requirements. We look forward to assisting you with your culinary needs.</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => {
              onClose()
              router.push('/home-3');
            }}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}