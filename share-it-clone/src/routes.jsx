import React from "react";
import { BrowseRouter, Route , Switch } from "react-router-dom";

import Folder from './pages/Folder'
import Folders from './pages/Folders'

const routes=() => (
    <BrowseRouter>
        <Switch>
            <Route path='/' exact component={Folders} />
            <Route path="/folder/:id" component={Folder}/>
            <Route path='*' component={Folders}/>
        </Switch>
    </BrowseRouter>
)