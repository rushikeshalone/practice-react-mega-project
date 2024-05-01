 import conf from '../conf/conf.js';
 // eslint-disable-next-line no-unused-vars
 import { Client,ID ,Databases,Storage,Query } from 'appwrite';

 export class Service{

    client = new Client();
    databases;
    bucket;

     constructor(){
         this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
        this.databases = new Databases();
        this.bucket = new Storage(this.client);
     }
 
     async createPost ({title,slug,content,featuredzImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title,
                content,
                featuredzImage,
                status,
                userId}

            )
        } catch (error) {
            console.log("Appwrite Service :: createPost ::error " , error);
        }
     }

      async UpdatePost(slug,{title,content,featuredzImage,status}){

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title,
                content,
                featuredzImage,
                status}
            );
        } catch (error) {
            console.log("Appwrite Service :: UpdatePost ::error " , error);
        }
      }

      async deletePost({slug}){

        try {
            
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
          return  true

        } catch (error) {
            console.log("Appwrite Service :: deletedPost ::error " , error);
            return false
        }

      }

      async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite Service :: getPost ::error " , error);
            return false;
        }
      }

      async getPosts(Query = [Query.equal("staus", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId, 
                conf.appwriteCollection,
                Query,
              
            );
        } catch (error) {
            console.log("Appwrite Service :: getPosts ::error " , error);
            return false;
            
        }
      }

      // file Upload Method 

      async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile ::error " , error);
            return false;
        }
      }

      async deletefile(fileId){
        try {
          await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
              return true;
        } catch (error) {
            console.log("Appwrite Service :: deletefile ::error " , error);
            return false;
        }
      }

      async getFilePriview(fileId){
        return await this.bucket.getFilePriview(
            conf.appwriteBucketId,
            fileId
        )
      }

 }


 const service = new Service
 export default service