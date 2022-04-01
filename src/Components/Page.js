import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom";

function Page(props) {

    if(props.headTitle) {

        document.title = props.headTitle
    }

    return (

        <>
            <main className="main" role="main">

                <style id="search_style"></style>

                <div className="pb-9 pt-2 bg-light">
                    <div className="container">

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                {props.bookmarks}
                                {(() => {

                                    if(props.bookmarks) {

                                        return (

                                            <li className="breadcrumb-item active" aria-current="page">{props.bookmarks[props.bookmarks.length - 1].label}</li>
                                        )
                                    }
                                })()}
                            </ol>
                        </nav>

                        <div className="row mb-2 mb-sm-2">
                            <div className="col-md-8 mx-auto">
                                <h1 className="h2 text-center">
                                    {props.pageCaption}
                                </h1>
                            </div>
                        </div>

                        {props.children}
                    </div>
                </div>
            </main>

            <div className="container">
                <div className="row mt-4">
                    <div className="col-12">
                        <p className="text-center">
                            &copy; 2020 MyHours.me - a division of Driscoll Ltd
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page;