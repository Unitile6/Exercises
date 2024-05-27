import { Suspense, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NavLink, Layout } from './components';
import classNames from 'classnames';
import { exercises } from './exercise';

import results from '../result/exercise-results.json';
import { Playground } from '../Playground/Playground';

// self declared:
import { TestArea } from "../TestArea/Test";
import { TestArea2 } from "../TestArea/Test";
import { KeypointTesting } from "../TestArea/Test";
import { ReactSpringTest } from "../TestArea/ReactSpringTest";
import {FramermotionTest} from "../TestArea/Framermotion";
import DataPassing from "../TestArea/DataPassing";
import Callbacks from "../TestArea/Callbacks";
import CallbacksFM from "../TestArea/CallbacksFM";
import Parasite from "../TestArea/Parasite";
import Presentatie from "../TestArea/PRESENTATIE"
import Skeleton from "../TestArea/Skeleton"
import Skeletonsvg from "../TestArea/Skeletonsvg"

export function App() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (!showMenu) {
      setTimeout(() => {
        // A quick trick to scroll the active link into view.
        const activeLink = document.querySelector('.js-active-link');

        if (activeLink) {
          activeLink.scrollIntoView({ block: 'center' });
        }
      }, 1);
    }

    setShowMenu(!showMenu);
  }

  useEffect(() => {
    function disableSave(event: KeyboardEvent) {
      if (
        event.key === 's' &&
        (navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey)
      ) {
        event.preventDefault();
      }
    }

    document.addEventListener('keydown', disableSave);

    return () => {
      document.removeEventListener('keydown', disableSave);
    };
  }, []);

  const exerciseProps = { showMenu, toggleMenu };

  return (
    <div className="grid grid-cols-12 h-screen">
      {showMenu ? (
        <div className="col-span-4 xl:col-span-3 border-r-4 border-gray-500 overflow-auto h-full max-h-full">
          <strong className="block text-2xl my-8 text-center">
            Oefeningen
          </strong>

          <nav className="flex flex-col gap-4">
            <NavLink
              to="/playground"
              completed={false}
              finished={true}
              onClick={() => setShowMenu(false)}
            >
              Playground
            </NavLink>

            <NavLink
              to="/skeleton"
              completed={false}
              finished={true}
              onClick={() => setShowMenu(false)}
            >
              Skeleton
            </NavLink>
            <NavLink
              to="/skeletonsvg"
              completed={false}
              finished={true}
              onClick={() => setShowMenu(false)}
            >
              Skeletonsvg
            </NavLink>
            <NavLink
              to="/PRESENTATIE"
              completed={false}
              onClick={()=> setShowMenu(false)}>

                + PRESENTATIE
            </NavLink>

            <NavLink
              to="/TestArea"
              completed={false}
              onClick={()=> setShowMenu(false)}>

                + TestArea
            </NavLink>

            <NavLink
              to="/TestArea2"
              completed={false}
              onClick={()=> setShowMenu(false)}>

                + TestArea B
            </NavLink>

            
            <NavLink
              to="/KeypointTesting"
              completed={false}
              onClick={()=> setShowMenu(false)}>

                + Keypoints test
            </NavLink>

            <NavLink
              to="/datapassing"
              completed={false}
              onClick={()=> setShowMenu(false)}>

                + Data Passing
            </NavLink>

            <NavLink
              to="/ReactSpringTest"
              completed={false}
              finished={true}
              onClick={()=> setShowMenu(false)}>

                + react-spring
            </NavLink>

            <NavLink
              to="/callbacks"
              completed={false}
              finished={true}
              onClick={()=> setShowMenu(false)}>

                + callbacks
            </NavLink>
            <NavLink
              to="/callbacksFM"
              completed={false}
              finished={true}
              onClick={()=> setShowMenu(false)}>

                + callbacksFM
            </NavLink>

            <NavLink
              to="/Framermotion"
              completed={false}
              onClick={()=> setShowMenu(false)}>

                + framer-motion
            </NavLink>
            
            <NavLink
              to="/Parasite"
              completed={false}
              finished={true}
              onClick={()=> setShowMenu(false)}>

                + PaRaSiTe
            </NavLink>

            {exercises.map((exercise, index) => {
              // @ts-expect-error this works fine
              const completed = results[exercise.id];

              return (
                <NavLink
                  key={index}
                  to={`/oefeningen/${exercise.name}`}
                  completed={completed}
                  onClick={() => setShowMenu(false)}
                >
                  {exercise.title}
                </NavLink>
              );
            })}
          </nav>
        </div>
      ) : null}

      <Suspense fallback="">
        <div
          className={classNames('flex flex-col h-full', {
            'col-span-8 xl:col-span-9': showMenu,
            'col-span-12': !showMenu,
          })}
        >
          <Routes>
            <Route
              path="/playground"
              element={
                <Layout title="Playground" {...exerciseProps} completed={false}>
                  <div className="p-4 col-span-6">
                    <Playground />
                  </div>
                </Layout>
              }
            />
              <Route
              path="/skeleton"
              element={
                <Layout title="Skeleton" {...exerciseProps} completed={false}>
                  <div className="p-4 col-span-6">
                    <Skeleton />
                  </div>
                </Layout>
              }
            />
            <Route
              path="/skeletonsvg"
              element={
                <Layout title="Skeletonsvg" {...exerciseProps} completed={false}>
                  <div className="p-4 col-span-6">
                    <Skeletonsvg />
                  </div>
                </Layout>
              }
            />
            <Route
              path="/PRESENTATIE"
              element={
                <Layout title="PRESENTATIE" {...exerciseProps} completed={false}>
                  <div className="p-4 col-span-6">
                    <Presentatie />
                  </div>
                </Layout>
              }
            />
            <Route 
            path="/testarea"
            element={
              <Layout title="Testing Area" {...exerciseProps} completed={false}>
              <div className="p-4 col-span-6">
              <TestArea />
            </div>
          </Layout>
            }
            />

          <Route 
            path="/testarea2"
            element={
              <Layout title="Testing Area 2" {...exerciseProps} completed={false}>
              <div className="p-4 col-span-6">
              <TestArea2 />
            </div>
          </Layout>
            }
            />

          <Route 
            path="/keypointtesting"
            element={
              <Layout title="Keypoints" {...exerciseProps} completed={false}>
              <div className="p-4 col-span-6">
              <KeypointTesting />
            </div>
          </Layout>
            }
            />

          <Route 
            path="/datapassing"
            element={
              <Layout title="Data Passing" {...exerciseProps} completed={false}>
              <div className="p-4 col-span-6">
                <DataPassing />
            </div>
          </Layout>
            }
            />

          <Route 
            path="/reactspringtest"
            element={
              <Layout title="react-spring" {...exerciseProps} completed={false}>
              <div className="p-4 col-span-6">
              <ReactSpringTest />
            </div>
          </Layout>
            }
            />
                      <Route 
            path="/callbacks"
            element={
              <Layout title="callbacks" {...exerciseProps} completed={false}>
              <div className="p-4 col-span-6">
              <Callbacks />
            </div>
          </Layout>
            }
            />
                      <Route 
            path="/callbacksFM"
            element={
              <Layout title="callbacksFM" {...exerciseProps} completed={false}>
              <div className="p-4 col-span-6">
              <CallbacksFM />
            </div>
          </Layout>
            }
            />

          <Route 
            path="/framermotion"
            element={
              <Layout title="framer-motion" {...exerciseProps} completed={false}>
              <div className="p-4 col-span-6">
              <FramermotionTest />
            </div>
          </Layout>
            }
            />

          <Route 
            path="/Parasite"
            element={
              <Layout title="PaRaSiTe" {...exerciseProps} completed={false}>
              <div className="p-4 col-span-6">
              <Parasite />
            </div>
          </Layout>
            }
            />
            
            {exercises.map((exercise) => {
              // @ts-expect-error this works fine
              const completed = results[exercise.id];

              return (
                <Route
                  key={exercise.id}
                  path={`/oefeningen/${exercise.name}`}
                  element={
                    <exercise.component
                      title={exercise.title}
                      completed={completed}
                      {...exerciseProps}
                    />
                  }
                />
              );
            })}

            <Route
              path="/*"
              element={
                <Navigate
                  to={`/oefeningen/${exercises[0].name}`}
                  replace={true}
                />
              }
            />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}
