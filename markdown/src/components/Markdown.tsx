import React, { useState, useEffect } from 'react'
import {Button, Input , NumberInput,  NumberInputField,  FormControl,  FormLabel, Text } from '@chakra-ui/react'
import fetch from 'node-fetch';
import remark from 'remark';
import html from 'remark-html';
import {read} from 'to-vfile'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'

interface Props {
    url : string
}

declare let window: any;

/*
const Markdown = ({ url }) => {
    const [content, setContent] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const text = await response.text();
        const result = await remark().use(html).process(text);
        setContent(result.toString());
      };
      fetchData();
    }, [url]);
  
    return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    );
  };
  
  export default Markdown;
  */





export default function RenderMarkdown(props:Props){


  //var [url,setUrlText] = useState<string>("")
  const [content, setContent] = useState('');

  useEffect(() => {
    const url = props.url
    const fetchData = async () => {
        const response = await fetch(url);  //fetch url
        const md_text = await response.text(); // string md
        const result = await render_md(md_text);
      //  const result = await remark().use(html).process(md_text);
        setContent(result.toString());
        console.log(content);
    };   

  //const queryParams = new URLSearchParams(location.search);
  //var message = queryParams.get('q');

    fetchData();
  
  //setMessageText(message!);
  
    }, []);

  async function render_md(md_text:string) {
    const file = await unified()
      .use(remarkParse)
      .use(remarkFrontmatter)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(md_text)
  
    console.log(String(file))
    return file;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );

}