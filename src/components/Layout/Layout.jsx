import { Route, Routes } from "react-router-dom";
import { SignIn } from "@components/SignIn";
import { PrivateRoute } from "@components/PrivateRoute";
import { lazy, Suspense } from "react";
import ErrorBoundary from "@components/ErrorBoundary";

const Home = lazy(() => import("@pages/Home"));
const Episodes = lazy(() => import("@pages/Episodes"));
const Episode = lazy(() => import("@pages/Episode"));
const Locations = lazy(() => import("@pages/Locations"));
const Location = lazy(() => import("@pages/Location"));
const Characters = lazy(() => import("@pages/Characters"));
const Character = lazy(() => import("@pages/Character"));
const NotFound = lazy(() => import("@pages/NotFound"));

export function Layout() {
  return (
    <div className="app__container">
      <Suspense fallback={<h1>Загрузка страницы...</h1>}>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <ErrorBoundary>
                <SignIn />
              </ErrorBoundary>
            }
          ></Route>

          <Route path="/characters">
            <Route
              index
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <Characters />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/characters/:id"
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <Character />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            ></Route>
          </Route>

          <Route path="/locations">
            <Route
              index
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <Locations />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/locations/:id"
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <Location />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            ></Route>
          </Route>

          <Route path="/episodes">
            <Route
              index
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <Episodes />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/episodes/:id"
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <Episode />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            ></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
