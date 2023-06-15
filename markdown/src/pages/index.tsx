import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect} from 'react'
import styles from '@/styles/Home.module.css'
import { VStack, Heading, Box, LinkOverlay, LinkBox} from "@chakra-ui/layout"
import RenderMarkdown from '../components/Markdown';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [relative_path,setRelativePath] = useState<string>("JackBekket/markdown_next/main/README.md")
  const [url_md, setUrlMd] = useState<string>("https://raw.githubusercontent.com/"+relative_path)
  return (
    <>
      <Head>
        <title>Render MD App</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <>

      <Heading as="h3"  my={4}>MD</Heading>          
      <VStack>
      <Box  mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4}  fontSize='xl'>Encrypt message</Heading>
          <RenderMarkdown 
            url={url_md}
          />
        </Box>


...
      </VStack>
    </>
  
      </main>
    </>
  )
}
