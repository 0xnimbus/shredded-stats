<label> Select Workouts: <br>
<% routines.forEach(function (r) { %> 
    <input type="checkbox" name='rtWorkouts' value="<%=r.name%>"> 
    <label for="rtWorkouts"> <%=r.name%> </label><br> 
<% }) %>
</label><br>

-----------------------
ROUTINES 
<% routines.forEach(function(r) { %>
            
            <h3 class="r-name"> <%= r.rtName %> </h3> 

            <% r.rtWorkouts.forEach(function (w){ %>
                <div class="rt-list">
                <p class="lists"> Workout: <%= w.name %> </p> <br> 
                <p class="lists"> Muscle Group: <%= w.muscleGroup %> </p> <br>
                <p class="lists"> Sets: <%= w.sets %> </p> <br>
            </div>
           <% }) %> 

           <a href="stats/<%=r.id%>/new"> Log A Workout! </a>
           <form action="/routines/<%= r.id %>?_method=DELETE" class="delete-form" method="POST">
            <button type="submit">X</button>
          </form>
          <a href="/routines/<%= r.id %>/update" > <button>Update</button> </a> <br>

           )%>  

            <% } else {%>

                <h1> No routines yet </h1> 
                
                <% }%>
            
            </div>