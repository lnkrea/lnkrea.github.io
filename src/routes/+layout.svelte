<script>
  import '../app.css';
  export const prerender = true;
</script>

<header>
  <a href="/">[ / ]</a> &nbsp; &nbsp; <a href="math ">[ math ]</a> <a href="cs">[ cs ]</a> <a href="phy ">[ phy ]</a> <a href="chem ">[ chem ]</a> <a href="bio ">[ bio ]</a> <a href="econ ">[ econ ]</a> <a href="his ">[ his ]</a> <a href="pol ">[ pol ]</a> <a href="psy ">[ psy ]</a> <a href="soc ">[ soc ]</a> <a href="bus ">[ bus ]</a> <a href="env ">[ env ]</a> <a href="lit ">[ lit ]</a> <a href="ga ">[ ga ]</a> </header>
<slot />

<style>
  header {
    color: #000000;
    background-color: #f0d5e0;
    padding: 4px;
    font-size: 0.75em;
    font-weight: 100;
    border-bottom: 1px solid #5d2639;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  a:active {
    color: #780a2d;
    background-color: white;
  }
  a:visited {
    color: #886671;
  }
</style>