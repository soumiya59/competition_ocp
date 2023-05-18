import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {update_article} from '../../slices/articleSlice.js'
import DefaultLayout from '../../layout/DefaultLayout.js';
import { useNavigate, useParams } from 'react-router-dom';

const AddArticle = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const {code}:any = useParams();
  const articles = useSelector((state: any)=>state.articles)
  const toUpdate = articles.find((ar:any)=> ar.code === parseInt(code))

  const [dataInput,setDataInput]=useState(toUpdate.info)
  const [oldtitre,setTitre]=useState(toUpdate.info.titre)
  const [oldjournal,setJournal]=useState(toUpdate.info.journal)
  const [oldredacteur,setRedacteur]=useState(toUpdate.info.redacteur)
  const [oldcorps,setCorps]=useState(toUpdate.info.corps)
  const [oldtheme,setTheme]=useState(toUpdate.info.theme)

  // useEffect(() => {
  //   if (toUpdate) {
  //     setDataInput({titre:toUpdate.info.titre});
  //   }
  // }, [toUpdate]);
  return (
    <DefaultLayout>
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Update Article
              </h3>
            </div>
            <form action="#" onSubmit={(e)=>e.preventDefault()} >
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Titre
                    </label>
                    <input
                      onChange={(e:any)=>{
                        setDataInput((prev:any)=>({...prev,[e.target.name]:e.target.value}))
                        setTitre(e.target.value)
                      }}
                      name="titre"
                      value={oldtitre}
                      type="text"
                      placeholder="Entrer le titre de l'article"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nom de journal
                    </label>
                    <input
                      onChange={(e:any)=>{
                        setDataInput((prev:any)=>({...prev,[e.target.name]:e.target.value}))
                        setJournal(e.target.value)
                      }}
                      name="journal"
                      value={oldjournal}
                      type="text"
                      placeholder="Entrer le nom de journal"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nom de Rédacteur
                    </label>
                    <input
                      onChange={(e:any)=>{
                        setDataInput((prev:any)=>({...prev,[e.target.name]:e.target.value}))
                        setRedacteur(e.target.value)
                      }}
                      name="redacteur"
                      value={oldredacteur}
                      type="text"
                      placeholder="Entrer le nom de rédacteur"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Corps d'article
                  </label>
                  <textarea
                      onChange={(e:any)=>{
                        setDataInput((prev:any)=>({...prev,[e.target.name]:e.target.value}))
                        setCorps(e.target.value)
                      }}
                    name="corps"
                    value={oldcorps}
                    rows={6}
                    placeholder="Entrer le Coprs de l'article"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Theme
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select  
                      onChange={(e:any)=>{
                        setDataInput((prev:any)=>({...prev,[e.target.name]:e.target.value}))
                        setTheme(e.target.value)
                      }}
                    name="theme"
                    value={oldtheme}
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value=''></option>
                      <option value="culture">Culture</option>
                      <option value="sport">Sport</option>
                      <option value="politique">Politique</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>


                <button
                 className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                  onClick={
                    ()=>{
                      dispatch(update_article({dataInput,code}))
                      navigate('/articleList')
                    }
                  }
                 >
                  Enregister 
                </button>
              </div>
            </form>
          </div>

    </DefaultLayout>
  );
};

export default AddArticle;
