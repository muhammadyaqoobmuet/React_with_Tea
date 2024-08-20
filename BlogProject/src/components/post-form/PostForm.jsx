import React,{useCallback} from 'react'
import Input from '../Input'
import { useSelector } from 'react-redux'
import Select from '../Select'
import RTE from '../RTE'
import { useForm } from 'react-hook-form'
import appwriteService from '../../appwrite/conf'

import { useNavigate } from 'react-router-dom'

function PostForm({post}) {
    const navigate = useNavigate();
    const userData = useSelector((state)=>state.auth.userData);
    const {register,handleSubmit,watch,setValue,control,getValues} = useForm({
        defaultValues:{
            title:post?.title || 'title',
            slug:post?.slug || '',
            content:post?.content || '',
            status:post?.status || 'active'
        }
    })

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }
    function slugTransform(value) {
        if (value && typeof value === 'string') {
            return value.trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-');
        }
        return '';
    }
    

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
          if (name === 'title') {
            const newSlug = slugTransform(value.title);
            setValue('slug', newSlug, { shouldValidate: true });
          }
        });
      
        return () => subscription.unsubscribe();
      }, [watch, setValue]);
      


  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <button type="submit" className={` ${post ? "bg-green-500" : undefined}  w-full  `} >
                    {post ? "Update" : "Submit"}
                </button>
            </div>
        </form>
  )
}

export default PostForm
